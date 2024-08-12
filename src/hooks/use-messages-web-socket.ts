import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import { GetRoomMessagesResponse } from '../http/get-room-message'

interface UseMessagesWebSocketParams {
  roomId: string
}

type WebHookMessage =
  | { kind: 'message_created', value: { id: string, text: string } }
  | { kind: 'message_answered', value: { id: string } }
  | { kind: 'message_reaction_increase' | 'message_reaction_decrease', value: { id: string, count: number } }

export function useMessagesWebSocket({ roomId }: UseMessagesWebSocketParams) {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient()
    const ws = new WebSocket(`ws://localhost:8080/subscribe/${roomId}`)

    ws.onopen = () => {
      console.log('Connected to websocket')
    }

    ws.onclose = () => {
      console.log('Disconnected from websocket')
    }

    ws.onmessage = (event) => {
      const data: WebHookMessage  = JSON.parse(event.data)

      switch (data.kind) {
        case 'message_created':
          queryClient.setQueryData<GetRoomMessagesResponse>(['message', roomId], (oldData) => {
            return {
              messages: [
                ...(oldData?.messages ?? []),
                {
                  id: data.value.id,
                  text: data.value.text,
                  amountOfReactions: 0 ,
                  answered: false
                }
              ]
            }
          })
          break
        case 'message_answered':
          queryClient.setQueryData<GetRoomMessagesResponse>(['message', roomId], (oldData) => {
            if (!oldData) return oldData

            return {
              messages: oldData.messages.map((message) => {
                if (message.id === data.value.id) {
                  return {
                    ...message,
                    answered: true
                  }
                }

                return message
              })
            }
          })
          break
        case 'message_reaction_increase':
        case 'message_reaction_decrease':
          queryClient.setQueryData<GetRoomMessagesResponse>(['message', roomId], (oldData) => {
            if (!oldData) return oldData

            return {
              messages: oldData.messages.map((message) => {
                if (message.id === data.value.id) {
                  return {
                    ...message,
                    amountOfReactions: data.value.count
                  }
                }

                return message
              })
            }
          })
          break
      }
    }
  }, [roomId])
  
}