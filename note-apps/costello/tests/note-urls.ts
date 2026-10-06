import assert from 'node:assert/strict';
import config from '../note.config.json';
import { chapterIdFromPath, noteUrl } from '../lib/note-urls';

for (const chapter of config.chapters) {
  assert.equal(noteUrl(`/${chapter.id}`), `/notes/costello/${chapter.id}/`);
  assert.equal(noteUrl(`/${chapter.id}#ref-example`), `/notes/costello/${chapter.id}/#ref-example`);
  assert.equal(chapterIdFromPath(`/notes/costello/${chapter.id}/`), chapter.id);
  assert.equal(chapterIdFromPath(`/notes/costello/${chapter.id}`), chapter.id);
}
assert.equal(noteUrl('/diagrams/wick-connected-vs-disconnected.svg'), '/notes/costello/diagrams/wick-connected-vs-disconnected.svg');
assert.equal(noteUrl('#eq-example'), '#eq-example');
assert.equal(noteUrl('/notes/costello/scales/#ref-example'), '/notes/costello/scales/#ref-example');
assert.equal(noteUrl('https://arxiv.org/abs/0706.1533'), 'https://arxiv.org/abs/0706.1533');
assert.equal(noteUrl('//example.org/image.svg'), '//example.org/image.svg');
assert.equal(noteUrl(undefined), undefined);
assert.equal(chapterIdFromPath('/notes/costello/'), undefined);
assert.equal(chapterIdFromPath('/notes/costello/unknown/'), undefined);
assert.equal(chapterIdFromPath('/scales/'), undefined);
assert.equal(chapterIdFromPath('/notes/costello/%67aussian/'), 'gaussian');
assert.equal(chapterIdFromPath('/notes/costello/%zz/'), undefined);
console.log('Note URL tests passed: base prefix, chapters, references, images and route parsing.');
