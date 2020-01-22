// tslint:disable-next-line: no-bitwise

export class Book ({
  school: string;
  subject: string;
  author: string;
  name: string;
  publisher: string;
  class: string;
  number: string;
} | {
  number: string;
  name: string;
  year: string;
  school: string;
  subject: string;
  author: string;
  publisher: string;
  class: string;
} | {
  number: string;
  year: string;
  author?: undefined;
  school: string;
  subject: string;
  author: string;
  name: string;
  publisher: string;
  class: string;
} | {
  year?: undefined;
  school: string;
  subject: string;
  author: string;
  name: string;
  publisher: string;
  class: string;
  number: string;
} | {
  ...;
} | {
  ...;
});

