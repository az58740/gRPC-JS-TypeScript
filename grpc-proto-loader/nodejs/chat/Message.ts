// Original file: proto/chat.proto

import type { Channel as _chat_Channel, Channel__Output as _chat_Channel__Output } from '../chat/Channel';

export interface Message {
  'sender'?: (string);
  'channel'?: (_chat_Channel | null);
  'message'?: (string);
}

export interface Message__Output {
  'sender'?: (string);
  'channel'?: (_chat_Channel__Output);
  'message'?: (string);
}
