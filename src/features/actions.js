// functions are action creator
export const inc = () => ({type: "INC"});
export const dec = () => ({type: "DEC"});
export const rnd = (value) => ({type: "RND", payload: value});