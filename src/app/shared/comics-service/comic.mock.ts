import { ComicModel } from './comic.model';

const asterix = new ComicModel();
const hulk = new ComicModel();
const spiderman = new ComicModel();
const xmen = new ComicModel();
const goutedieu = new ComicModel();

asterix.startYear = 1964;
asterix.name = 'Asterix le gaulois';
asterix.description = 'Astérix, anciennement Astérix le Gaulois, est une série de bande dessinée française créée le 29 octobre 1959' +
  ' par le scénariste français René Goscinny';
asterix.image = {originalUrl: 'assets/img/1.jpg'};
asterix.id = 1051;

hulk.startYear = 1954;
hulk.name = 'Hulk le magnifique';
hulk.description = 'Hulk alias Bruce Banner est un personnage de comics appartenant à l\'univers Marvel. ' +
  'Il a été créé par Stan Lee et Jack Kirby. Hulk est apparu pour la première fois dans « The Incredible Hulk #1 » ' +
  'publié par Marvel Comics en 1962.';
hulk.image = {originalUrl: 'assets/img/2.jpg'};
hulk.id = 1052;

spiderman.startYear = 1965;
spiderman.name = 'Spiderman';
spiderman.description = 'Peter Parker, alias Spider-Man (souvent écrit « Spiderman » de façon erronée), ' +
  'est un super-héros évoluant dans l\'univers Marvel de la maison d\'édition Marvel Comics.';
spiderman.image = {originalUrl: 'assets/img/3.jpg'};
spiderman.id = 1053;

xmen.startYear = 1832;
xmen.name = 'X-men';
xmen.description = 'ALes X-Men est le nom d\'une équipe de super-héros évoluant dans l\'univers Marvel' +
  ' de la maison d\'édition Marvel Comics';
xmen.image = {originalUrl: 'assets/img/4.jpg'};
xmen.id = 1054;

goutedieu.startYear = 2001;
goutedieu.name = 'Les gouttes de dieu - Volume 1';
goutedieu.description = 'Les Gouttes de Dieu est un manga sur le vin écrit par Tadashi Agi et dessiné par Shū Okimoto.';
goutedieu.image = {originalUrl: 'assets/img/5.jpg'};
goutedieu.id = 1664;

export const comicsMock = [asterix, hulk, xmen, spiderman, goutedieu];
