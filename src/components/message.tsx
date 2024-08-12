import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { toast } from 'sonner'

import { createMessageReaction } from '../http/create-message-reaction'
import { removeMessageReaction } from '../http/remove-message-reaction'

interface MessageProps {
  id: string
  text: string
  amountOfReactions: number
  answered?: boolean
}

export function Message({ id: messageId, text, amountOfReactions, answered }: MessageProps) {
  const { roomId } = useParams();
  const [hasReacted, setHasReacted] = useState(false)

  if (!roomId) throw new Error('Messages component must be used within a room')

  async function createMessageReactionAction() {
    if (!roomId) return

    try {
      await createMessageReaction({ roomId, messageId })
      setHasReacted(true)
    } catch {
      toast.error('Erro ao curtir mensagem, tente novamente!')
    }
  }

  async function removeMessageReactionAction() {
    if (!roomId) return

    try {
      await removeMessageReaction({ roomId, messageId })
      setHasReacted(false)
    } catch {
      toast.error('Erro ao remover reação da mensagem, tente novamente!')
    }
  }

  return (
    <li data-answered={answered} className='ml-4 leading-relaxed text-zinc-100 data-[answered]:opacity-50 data-[answered]:pointer-events-none'>
      {text}
      {hasReacted ? (
        <button
          type='button'
          onClick={removeMessageReactionAction}
          className='mt-3 flex item-center gap-2 text-orange-400 text-sm font-medium houver:text-orange-500'>
          <ArrowUp className='size-4' />
          Curtir pergunta ({amountOfReactions})
        </button>
      ) : (
        <button
          type='button'
          onClick={createMessageReactionAction}
          className='mt-3 flex item-center gap-2 text-zinc-400 text-sm font-medium houver:text-zinc-300'>
          <ArrowUp className='size-4' />
          Curtir pergunta ({amountOfReactions})
        </button>
      )}
    </li>

  )
}