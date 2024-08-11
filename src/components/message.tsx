import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

interface MessageProps {
  text: string
  amountOfReactions: number
  answered?: boolean
}

export function Message({ text, amountOfReactions, answered }: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false)

  function handleReactionToMessage() {
    setHasReacted(true)
  }

  return (
    <li data-answered={answered} className='ml-4 leading-relaxed text-zinc-100 data-[answered]:opacity-50 data-[answered]:pointer-events-none'>
      {text}
      {hasReacted ? (
        <button type='button' className='mt-3 flex item-center gap-2 text-orange-400 text-sm font-medium houver:text-orange-500'>
          <ArrowUp className='size-4' />
          Curtir pergunta ({amountOfReactions})
        </button>
      ) : (
        <button onClick={handleReactionToMessage} type='button' className='mt-3 flex item-center gap-2 text-zinc-400 text-sm font-medium houver:text-zinc-300'>
          <ArrowUp className='size-4' />
          Curtir pergunta ({amountOfReactions})
        </button>
      )}
    </li>

  )
}