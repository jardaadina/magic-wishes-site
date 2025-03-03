export interface NewSecretSanta {
  id?: number;
  title: string;
  place: string;
}

export interface Participans {
  id?: number;
  userId: number;
  secretSantaId: number;
}

export interface WhoToWho {
  id?: number;
  userId1: number;
  userId2: number;
  secretSantaId: number;
}
