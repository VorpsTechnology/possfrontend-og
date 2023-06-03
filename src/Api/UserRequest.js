import axios from "axios";
 const API=axios.create({baseURL:"https://server.possindia.in"})
//const API=axios.create({baseURL:"http://localhost:5005"})

export const getUser=(data)=>API.get(`/user/${data}`)

export const updateUserInfo=(data)=>API.put(`/user/${data._id}`,data)

export const updateAddress=(data)=>API.post(`/user/address`,data)
export const removeAddress=(data)=>API.post(`/user/removeaddress`,data)

