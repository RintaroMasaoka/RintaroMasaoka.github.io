from pathlib import Path
import json
root=Path(__file__).resolve().parent
editable=root/'editable';editable.mkdir(parents=True,exist_ok=True)
ink='#25323e';gray='#aeb8c2';orange='#b15b27'
parts=[];labels=[]
def line(x1,y1,x2,y2,color=gray,width=2,extra=''):
    parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width}" {extra}/>')
def dot(x,y,r=4,fill=gray,stroke='none',width=1):
    parts.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{width}"/>')
def label(meaning,tex,x,y,size=27,width=640):
    labels.append({'id':f'point-defect-fusion-{len(labels)}','meaning':meaning,'tex':tex,'x':x,'y':y,'size':size,'width':width,'renderer':'KaTeX','fontFamily':'KaTeX Main / Math'})

label('diagram title',r'\text{Local defects on a 1D chain}',340,34,28)
for x,word in [(102,'left bulk'),(340,'middle bulk'),(584,'right bulk')]:
    label('bulk position role',rf'\text{{{word}}}',x,91,25,210)
line(47,145,635,145)
line(170,145,280,145,orange,4)
line(380,145,500,145,orange,4)
for x in [55,105,155,170,280,330,380,500,550,600,630]:dot(x,145)
for x in [230,450]:dot(x,145,17,'white',orange,3)
label('first local defect',r'\text{defect 1}',230,194,26,240)
label('second local defect',r'\text{defect 2}',450,194,26,240)
parts.append('<rect x="160" y="112" width="352" height="110" rx="12" fill="none" stroke="'+ink+'" stroke-width="1.8" stroke-dasharray="6 5"/>')
line(340,237,340,291,ink,2.5,'marker-end="url(#arr)"')
label('operation combining a local region',r'\text{combine this region}',505,264,25,320)

line(47,368,635,368)
line(235,368,445,368,orange,4)
for x in [55,105,155,205,235,445,475,525,575,630]:dot(x,368)
dot(340,368,37,'#fff0e4',orange,3)
label('retained left bulk',r'\text{left bulk}',102,322,25,210)
label('retained right bulk',r'\text{right bulk}',584,322,25,210)
label('one spatially localized composite object',r'\text{composite defect}',340,422,27)
label('possible type decomposition without a fixed channel count',r'\text{one or more defect types}',340,470,26)

svg='<svg xmlns="http://www.w3.org/2000/svg" width="680" height="500" viewBox="0 0 680 500"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10z" fill="'+ink+'"/></marker></defs>'+''.join(parts)+'</svg>'
editable.joinpath('point-defect-fusion-geometry.svg').write_text(svg)
editable.joinpath('point-defect-fusion-labels.json').write_text(json.dumps(labels,indent=2)+'\n')
caption='一次元鎖の二つの点欠陥とその間の領域を一つにまとめ、下段では同じ左右の相をつなぐ一つの欠陥として表す。合成後の欠陥は一種類とは限らず、種類や個数の値は指定していない。'
root.joinpath('figures.json').write_text(json.dumps([{'id':'point-defect-fusion','width':680,'height':500,'caption':caption}],ensure_ascii=False,indent=2)+'\n')
print(f'Created chain diagram with {len(labels)} actual TeX label sources.')
