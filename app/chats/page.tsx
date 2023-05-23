import ChatCard from '@/components/ChatCard';
import NavTabs from '@/components/NavTabs';
import { profiles } from '@/lib/dummy';

export default function Chats() {
  const subset = profiles.filter((profile) => profile.id < 5);

  return (
    <>
      <div>
        <section className="space-y-5 p-5">
          <h1 className="font-bold">Chats</h1>

          <p>Lorem ipsum dolor sit amet.</p>
        </section>

        <section>
          {subset.map((profile) => (
            <ChatCard profile={profile} key={profile.name} />
          ))}
        </section>
      </div>

      <NavTabs />
    </>
  );
}
