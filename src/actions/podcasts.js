// ACTION TYPE FETCH_PODCASTS
export const FETCH_PODCASTS = 'FETCH_PODCASTS';

// ACTION CREATOR FETCH_PODCASTS
export const fetchPodcasts = () => ({
  type: FETCH_PODCASTS,
});

// ACTION TYPE SAVE_PODCASTS
export const SAVE_PODCASTS = 'FETCH_PODCASTS';

// ACTION CREATOR savePODCASTS
export const savePodcasts = (data) => ({
  type: SAVE_PODCASTS,
  data,
});