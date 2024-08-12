import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getRoomMessages } from '../http/get-room-message';
import { useMessagesWebSocket } from '../hooks/use-messages-web-socket';
import { Message } from './message';

export function Messages() {
  const { roomId } = useParams();

  if (!roomId) throw new Error('Messages component must be used within a room')

  const { data } = useSuspenseQuery({
    queryKey: ['room', roomId],
    queryFn: () => getRoomMessages({ roomId }),
  })

  useMessagesWebSocket({ roomId })

  const sortedMessages = data.messages.sort((a, b) => {
    return b.amountOfReactions - a.amountOfReactions
  })

  return (
    <ol className='list-decimal list-outside px-3 space-y-8'>
      {sortedMessages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          text={message.text}
          amountOfReactions={message.amountOfReactions}
          answered={message.answered}
        />
      ))}
    </ol>
  )
}