export type userType = login | signup

type login = {
    username : string,
    password : string
};
type signup = {
    username : string,
    email :string,
    password : string
}
export type IUser = {
    _id? : string,
    name : string,
    password: string
}