import React from "react";

function Item(props) {
  // keyは子に持たない
  return <li>{props.value}</li>;
}
export function ListItems(props) {
  //keyは内部の変更検出用　https://ja.reactjs.org/docs/reconciliation.html
  // indexは最終手段で使うべきではない https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
  const items = props.numbers.map((number) => (
    // keyを使いたい時はpropsにも渡す。（keyはコンポーネントに渡されない）
    <Item key={number.toString()} value={number} />
  ));

  // mapをインラインにもできる。
  // <ul>{numbers.map((number) => <Item/>)}</ul>
  return <ul>{items}</ul>;
}
