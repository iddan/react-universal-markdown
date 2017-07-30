import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
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
test('Mixed', () => {
  expect(
    renderToStaticMarkup(
      <DOMMarkdown >{`__Blepharitis__ is inflammation of the eyelids near the eyelashes. __Blepharitis__ occurs in two forms:
  - __Anterior Blepharitis__ affects the outside front of the eyelid, where the eyelashes are attached. 
  - __Posterior Blepharitis__ affects the inner eyelid (the moist part that makes contact with the eye).
  &nbsp;
  Common causes of anterior __blepharitis__ are bacterial infection (*Staphylococcus*) and a skin condition called *seborrheic dermatitis*. __Posterior blepharitis__ is often caused by problems with the oil glands in this part of the eyelid. It is associated with other skin conditions like *acne rosacea* and *seborrheic dermatitis*.
  > hello
  > hey
> jo`}</DOMMarkdown>,
    ),
  ).toBe(
    '<div><p><strong><span>Blepharitis</span></strong><span> is inflammation of the eyelids near the eyelashes. </span><strong><span>Blepharitis</span></strong><span> occurs in two forms:</span></p><ul><li><p><strong><span>Anterior Blepharitis</span></strong><span> affects the outside front of the eyelid, where the eyelashes are attached.</span></p></li><li><p><strong><span>Posterior Blepharitis</span></strong><span> affects the inner eyelid (the moist part that makes contact with the eye).</span><br/><span> </span><br/><span>Common causes of anterior </span><strong><span>blepharitis</span></strong><span> are bacterial infection (</span><em><span>Staphylococcus</span></em><span>) and a skin condition called </span><em><span>seborrheic dermatitis</span></em><span>. </span><strong><span>Posterior blepharitis</span></strong><span> is often caused by problems with the oil glands in this part of the eyelid. It is associated with other skin conditions like </span><em><span>acne rosacea</span></em><span> and </span><em><span>seborrheic dermatitis</span></em><span>.</span></p></li></ul><blockquote><p><span>hello</span><br/><span>hey</span><br/><span>jo</span></p></blockquote></div>',
  );
});
