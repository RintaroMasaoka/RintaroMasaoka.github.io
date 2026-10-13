from pathlib import Path
import json

root=Path(__file__).resolve().parent
editable=root/'editable'
editable.mkdir(parents=True,exist_ok=True)
ink='#25323e'; orange='#b15b27'; pale='#eef3f7'; gray='#b8c2cc'
parts=[]; labels=[]
def line(x1,y1,x2,y2,color=ink,width=2.5,extra=''):
    parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width}" {extra}/>')
def circle(x,y,changed=False):
    parts.append(f'<circle cx="{x}" cy="{y}" r="17" fill="{"#fff0e4" if changed else pale}" stroke="{orange if changed else ink}" stroke-width="2.5"/>')
def label(meaning,tex,x,y,size=28,width=640):
    labels.append({'id':f'gauge-connection-{len(labels)}','meaning':meaning,'tex':tex,'x':x,'y':y,'size':size,'width':width,'renderer':'KaTeX','fontFamily':'KaTeX Main / Math'})

for panel,before,after in [('left',145,260),('right',460,575)]:
    title_y=35 if panel=='left' else 350
    label('local transformation being illustrated',rf'\text{{Change {panel} state}}',340,title_y,28)
    label('left endpoint state',r'\text{Left state}',170,before-68,25,220)
    label('right endpoint state',r'\text{Right state}',520,before-68,25,220)
    label('before row',r'\text{Before}',62,before,24,105)
    label('after row',r'\text{After}',62,after,24,105)
    for x in [170,520]:
        circle(x,before)
        circle(x,after,changed=(panel=='left' and x==170) or (panel=='right' and x==520))
        line(x,before+17,x,after-17,ink,2.5,'marker-end="url(#arr)"')
    line(503,before,187,before,ink,2.5,'marker-end="url(#arr)"')
    line(503,after,187,after,ink,2.5,'marker-end="url(#arr)"')
    label('original right-to-left link',r'g',340,before-25,30)
    label('transformed right-to-left link',r'hg' if panel=='left' else r'gh^{-1}',340,after-25,30)
    if panel=='left':
        label('left local group transformation',r'h',128,(before+after)/2,29,75)
        label('right endpoint unchanged',r'\mathrm{id}',563,(before+after)/2,27,90)
    else:
        label('left endpoint unchanged',r'\mathrm{id}',213,(before+after)/2,27,90)
        label('right local group transformation',r'h',477,(before+after)/2,29,75)
        parts.append(f'<path d="M537,{after} L586,{after} L586,{before} L537,{before}" fill="none" stroke="{orange}" stroke-width="2.5" marker-end="url(#arr)"/>')
        label('inverse returning the right state to the original link input',r'h^{-1}',630,(before+after)/2,28,85)
line(27,310,653,310,gray,1.5)
label('new right link cancels the right state change',r'(gh^{-1})\,h=g',340,638,31)
svg='<svg xmlns="http://www.w3.org/2000/svg" width="680" height="680" viewBox="0 0 680 680"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10z" fill="'+ink+'"/></marker></defs>'+''.join(parts)+'</svg>'
editable.joinpath('gauge-connection-geometry.svg').write_text(svg)
editable.joinpath('gauge-connection-labels.json').write_text(json.dumps(labels,indent=2)+'\n')
caption='各図の上の行は変換前、下の行は変換後。結合gは右端から左端へ作用する。左端だけをhで変えると結合はhg、右端だけをhで変えるとgh⁻¹になる。下半分の右側には、変換後の右端の状態を元のgの入力へ戻すh⁻¹の矢印がある。'
root.joinpath('figures.json').write_text(json.dumps([{'id':'gauge-connection','width':680,'height':680,'caption':caption}],ensure_ascii=False,indent=2)+'\n')
print(f'Created one two-site diagram with {len(labels)} TeX labels.')
