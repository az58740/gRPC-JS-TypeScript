// Original file: proto/chat.proto

import type { User as _chat_User, User__Output as _chat_User__Output } from '../chat/User';

export interface Connect {
  'user'?: (_chat_User | null);
  'active'?: (boolean);
}

export interface Connect__Output {
  'user'?: (_chat_User__Output);
  'active'?: (boolean);
}
