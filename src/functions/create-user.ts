import * as AppBskyActorDefs from '@atproto/api/src/client/types/app/bsky/actor/defs'

// User type
export type User = {
  did: string
  handle: string
  name: string
  avatar: string | null
}

// Create a user
export function createUser(data: AppBskyActorDefs.ProfileViewDetailed): User {
  return {
    did: data.did,
    handle: data.handle,
    name: data.displayName || data.handle,
    avatar: data.avatar || null,
  }
}
