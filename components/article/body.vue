<template>
  <section class="article-body">
    <slot></slot>
  </section>
</template>

<script>
export default {}
</script>


<style lang="scss">
.article-body {
  font-size: 14px; 
  line-height: 1.8;

  img {
    max-width: 100%;
  }
  hr {
    border-color: #666;
  }
  p {
    margin: 1em 0;
  }
  a {
    color: #4fb9fe;

    &:hover {
      text-decoration: underline;
    }
  }
  h1 {
    margin: 1em 0;
    font-size: 24px;
  }
  h2 {
    margin: 1em 0; 
    font-weight: 700; 
    font-size: 20px;}
  h3 {
    margin: 1em 0; 
    font-weight: 700; 
    font-size: 16px;
  }
  .terminal {
    display: inline-block; 
    background: #222222; 
    margin: 0 3px; 
    padding: 0 5px; 
    border-radius: 3px; 
    color: #e4aa68;
  }
  pre {margin: 1.8em 0;
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      background: none;
    }
  }

  p {
    white-space: pre-wrap; 
    word-break: keep-all;
  }
  li {
    word-break: keep-all;
  }
  ul {
    margin-left: 1.8em; 
    margin-top: 1.8em; 
    margin-bottom: 1.8em;

    li {list-style: circle;
      &:not(:first-child) {margin-top: 0.2em;}
    }
  }
  ol {margin-left: 1.8em; margin-top: 1.8em; margin-bottom: 1.8em;
    li {list-style: decimal;
      &:not(:first-child) {margin-top: 0.2em;}
    }
  }
  blockquote {background: #1e1e1e; padding: 1em; font-family: 'Nanum Myeongjo'; font-size: 1em;
    p {margin: 0; padding: 0.5em 1em; border-left: 3px solid #ffffff;}
  }
}

.nuxt-content-highlight {position: relative;
  > .filename {position: absolute; top: 5px; right: 10px; color: #a8b4c2;}
}

:not(pre) > code {padding: .1em .3em; border-radius: .3em; color: #db4c69; background: #222222;}

pre[class*="language-"],
code[class*="language-"] {color: #d4d4d4; font-size: 14px; text-shadow: none; font-family: Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; -moz-tab-size: 4; -o-tab-size: 4; tab-size: 4; -webkit-hyphens: none; -moz-hyphens: none; -ms-hyphens: none; hyphens: none;
  &::selection,
  & *::selection {text-shadow: none; background: #75a7ca;}

  @media print {text-shadow: none;}
}

pre[class*="language-"] {padding: 1em; margin: 1.8em 0; overflow: auto; background: #1e1e1e;}
.namespace {opacity: .7;}
.token.doctype .token.doctype-tag {color: #569CD6;}
.token.doctype .token.name {color: #9cdcfe;}
.token.comment,
.token.prolog {color: #6a9955;}
.token.punctuation,
.language-html .language-css .token.punctuation,
.language-html .language-javascript .token.punctuation {color: #d4d4d4;}
.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.inserted,
.token.unit {color: #b5cea8;}
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.deleted {color: #ce9178;}
.language-css .token.string.url {text-decoration: underline;}
.token.operator,
.token.entity {color: #d4d4d4;}
.token.operator.arrow {color: #569CD6;}
.token.atrule {color: #ce9178;}
.token.atrule .token.rule {color: #c586c0;}
.token.atrule .token.url {color: #9cdcfe;}
.token.atrule .token.url .token.function {color: #dcdcaa;}
.token.atrule .token.url .token.punctuation {color: #d4d4d4;}
.token.keyword {color: #569CD6;}
.token.keyword.module,
.token.keyword.control-flow {color: #c586c0;}
.token.function,
.token.function .token.maybe-class-name {color: #dcdcaa;}
.token.regex {color: #d16969;}
.token.important {color: #569cd6;}
.token.italic {font-style: italic;}
.token.constant {color: #9cdcfe;}
.token.class-name,
.token.maybe-class-name {color: #4ec9b0;}
.token.console {color: #9cdcfe;}
.token.parameter {color: #9cdcfe;}
.token.interpolation {color: #9cdcfe;}
.token.punctuation.interpolation-punctuation {color: #569cd6;}
.token.boolean {color: #569cd6;}
.token.property,
.token.variable,
.token.imports .token.maybe-class-name,
.token.exports .token.maybe-class-name {color: #9cdcfe;}
.token.selector {color: #d7ba7d;}
.token.escape {color: #d7ba7d;}
.token.tag {color: #569cd6;}
.token.tag .token.punctuation {color: #808080;}
.token.cdata {color: #808080;}
.token.attr-name {color: #9cdcfe;}
.token.attr-value,
.token.attr-value .token.punctuation {color: #ce9178;}
.token.attr-value .token.punctuation.attr-equals {color: #d4d4d4;}
.token.entity {color: #569cd6;}
.token.namespace {color: #4ec9b0;}
.token.script {color: #9cdcfe;}
pre[class*="language-javascript"],
code[class*="language-javascript"],
pre[class*="language-jsx"],
code[class*="language-jsx"],
pre[class*="language-typescript"],
code[class*="language-typescript"],
pre[class*="language-tsx"],
code[class*="language-tsx"] {color: #9cdcfe;}
pre[class*="language-css"],
code[class*="language-css"] {color: #ce9178;}
pre[class*="language-html"],
code[class*="language-html"] {color: #d4d4d4;}
.language-regex .token.anchor {color: #dcdcaa;}
.language-html .token.punctuation {color: #808080;}
pre[data-line] {position: relative;}
pre[class*="language-"] > code[class*="language-"] {position: relative; z-index: 1;}
.line-highlight {position: absolute; left: 0; right: 0; padding: inherit 0; margin-top: 1em; background: #f7ebc6; box-shadow: inset 5px 0 0 #f7d87c; z-index: 0; pointer-events: none; line-height: inherit; white-space: pre;}

table {border-collapse: collapse; margin: 1.8em 0;
  thead {
    tr {
      th {border: 1px solid #eeeeee; background: #222222; padding: 3px;}
    }
  }
  tbody {
    tr {
      th {background: #f7f7f7; padding: 3px;}
      td {border: 1px solid #eeeeee; padding: 3px;}
    }
  }
}
</style>