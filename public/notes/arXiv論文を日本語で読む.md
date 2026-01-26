+++
title = "arXiv論文を日本語で読む"
lang_ja = true
+++

arXiv論文を日本語で読みたいのだが、google翻訳を使うと数式を無理に翻訳して解読不能にしてしまう。そこで数式部分を翻訳から保護するブックマークレットをClaudeに作ってもらった。
(私はコードの内容を理解していないので、使用は自己責任でお願いします。)

# 使い方
- chromeのブックマークマネージャ(chrome://bookmarks/)の右上のメニューから新しいブックマークを追加する。
- ブックマークの名前をmath-protection(何でもいい)として、URL部分に以下のコードを貼り付ける。
- ブックマークバーからmath-protectionをクリックすると数式を保護してくれるので、その後通常のgoogle翻訳を行う。
- arXiv論文を翻訳する場合はpdfでなくhtmlで表示する。公式がhtmlに対応していない場合、ar5ivで見る。(論文のアブストのリンクでarxivのxを5に変える)

# コード

```plaintext
javascript:(function(){function protectMathElements(){try{const e=document.querySelectorAll("math");let t=0;e.forEach(e=>{e.setAttribute("translate","no"),t++});const n=document.createElement("div");return n.textContent=`${t}個の数式要素を翻訳から保護しました`,n.style.position="fixed",n.style.top="10px",n.style.right="10px",n.style.padding="10px",n.style.backgroundColor="rgba(0, 0, 0, 0.7)",n.style.color="white",n.style.borderRadius="5px",n.style.zIndex="10000",document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 1s",setTimeout(()=>n.remove(),1000)},3000),`${t}個の数式要素が保護されました。`}catch(e){return console.error("スクリプト実行エラー:",e),"エラーが発生しました"}}protectMathElements();})();
```
