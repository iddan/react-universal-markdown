import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import DOMMarkdown from './DOMMarkdown';

test('Em', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'*test*'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><p><em><span>test</span></em></p></div>');
});
test('Strong', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'**test**'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><p><strong><span>test</span></strong></p></div>');
});
test('Link', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'[test](http://example.com)'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><p><a title="" href="http://example.com"><span>test</span></a></p></div>');
});
test('Image', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'![test](http://example.com)'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><p><img src="http://example.com" title=""/></p></div>');
});
test('Code', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'`test`'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><p><code>test</code></p></div>');
});
test('Paragraph', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'test'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><p><span>test</span></p></div>');
});
test('BlockQuote', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'> test'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><blockquote><p><span>test</span></p></blockquote></div>');
});
test('Item', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {''}
      </DOMMarkdown>,
    ),
  ).toBe('<div></div>');
});
test('List', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>{`
 - Apple
 - Banana
 - Melon
  `}</DOMMarkdown>,
    ),
  ).toBe(
    '<div><ul><li><p><span>Apple</span></p></li><li><p><span>Banana</span></p></li><li><p><span>Melon</span></p></li></ul></div>',
  );
});
test('Heading', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>{`
  # Test  
  `}</DOMMarkdown>,
    ),
  ).toBe('<div><h1><span>Test</span></h1></div>');
});
test('CodeBlock', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {`
\`\`\`
  test
\`\`\`
      `}
      </DOMMarkdown>,
    ),
  ).toBe(`<div><pre><code>  test
</code></pre></div>`);
});
test('ThematicBreak', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown>
        {'---'}
      </DOMMarkdown>,
    ),
  ).toBe('<div><hr/></div>');
});
test('Document', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown className="test">
        {''}
      </DOMMarkdown>,
    ),
  ).toBe('<div class="test"></div>');
});
