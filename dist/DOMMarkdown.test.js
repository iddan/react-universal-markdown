import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import DOMMarkdown from './DOMMarkdown';

test('Em', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '*test*'
  ))).toBe('<div><p><em><span>test</span></em></p></div>');
});
test('Strong', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '**test**'
  ))).toBe('<div><p><strong><span>test</span></strong></p></div>');
});
test('Link', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '[test](http://example.com)'
  ))).toBe('<div><p><a title="" href="http://example.com"><span>test</span></a></p></div>');
});
test('Image', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '![test](http://example.com)'
  ))).toBe('<div><p><img src="http://example.com" title=""/></p></div>');
});
test('Code', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '`test`'
  ))).toBe('<div><p><code>test</code></p></div>');
});
test('Paragraph', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    'test'
  ))).toBe('<div><p><span>test</span></p></div>');
});
test('BlockQuote', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '> test'
  ))).toBe('<div><blockquote><p><span>test</span></p></blockquote></div>');
});
test('Item', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    ''
  ))).toBe('<div></div>');
});
test('List', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '\n - Apple\n - Banana\n - Melon\n  '
  ))).toBe('<div><ul><li><p><span>Apple</span></p></li><li><p><span>Banana</span></p></li><li><p><span>Melon</span></p></li></ul></div>');
});
test('Heading', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '\n  # Test  \n  '
  ))).toBe('<div><h1><span>Test</span></h1></div>');
});
test('CodeBlock', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '\n```\n  test\n```\n      '
  ))).toBe('<div><pre><code>  test\n</code></pre></div>');
});
test('ThematicBreak', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    null,
    '---'
  ))).toBe('<div><hr/></div>');
});
test('Document', function () {
  expect(renderToStaticMarkup(React.createElement(
    DOMMarkdown,
    { className: 'test' },
    ''
  ))).toBe('<div class="test"></div>');
});