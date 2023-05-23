const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit Nulla sequi iusto expedita iste doloribus quos natus nam sit hic perspiciatis illo temporibus Expedita aliquam et molestias quidem ipsum Quo assumenda ipsum Quia et ratione veniam iste illo similique accusamus vel voluptatum voluptas perspiciatis consequuntur voluptates recusandae vitae blanditiis repellendus odio';

const words = lorem.split(' ');

export const profiles: Profile[] = Array.from(Array(10).keys()).map((i) => ({
  id: i,
  imageUrl: `https://i.pravatar.cc/700?img=${i}`,
  name: words[i * 2],
  title: words[i * 2 + 1],
  age: 20 + (i ** 3 % 10),
}));

export const messages: Message[] = [
  'foo lkjsh slkhjdsg',
  'fgjklsf lkf',
  'fdgdf',
  'fdgjlhsfl lfkjg lsfdkjgh lsdkfjh lfdjkhg ldfsjhflj',
  'dfklgjdfgkl; ;lkfj',
].map((x, i) => ({
  id: i,
  sender_id: Math.random() > 0.7 ? 1 : 0,
  text: x,
}));
