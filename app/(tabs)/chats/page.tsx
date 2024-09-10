import ChatCard from '@/components/ChatCard';
import { chatProfiles } from '@/lib/profiles';

export default function Chats() {
  return (
    <div>
      <section className="space-y-5 p-5">
        <h1 className="font-bold">Chats</h1>

        <p>Don&apos;t keep your matches waiting!</p>
      </section>

      <section>
        {chatProfiles.map((profile) => (
          <ChatCard profile={profile} key={profile.name} />
        ))}
      </section>
    </div>
  );
}
