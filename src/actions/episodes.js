// ACTION TYPE FETCH_EPISODES
export const FETCH_EPISODES = 'FETCH_EPISODES';

// ACTION CREATOR FETCH_EPISODES
export const fetchEpisodes = () => ({
  type: FETCH_EPISODES,
});

// ACTION TYPE SAVE_EPISODES
export const SAVE_EPISODES = 'FETCH_EPISODES';

// ACTION CREATOR saveEpisodes
export const saveEpisodes = (episodes) => ({
  type: SAVE_EPISODES,
  episodes,
});