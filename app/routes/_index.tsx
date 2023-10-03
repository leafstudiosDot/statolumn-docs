import type { MetaFunction } from "@remix-run/node";
import React, {useEffect, useState} from 'react'
import {marked} from "marked";

export const meta: MetaFunction = () => {
  return [
    { title: "Statolumn Docs" },
    { name: "description", content: "Statolumn Documentation for Developers" },
  ];
};

export default function Index() {
  const [md, setMD] = useState('')
  useEffect(() => {
    fetch('/mddocs/intro.md')
    .then((res) => res.text())
    .then((text) => {
      setMD(marked(text))
    })
  }, [])
  return (
    <div>
      Statolumn Developer Documentation
      <div dangerouslySetInnerHTML={{__html: md}} />
    </div>
  );
}
