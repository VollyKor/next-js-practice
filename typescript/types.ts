export interface State {
  posts: InitialState
}

export interface InitialState {
  entities: IpostWithComments[]
  loading: boolean
  error: any
}

export interface InewPost {
  title: string
  body: string
}

export interface Ipost extends InewPost {
  id: number | string
}

export interface InewComment {
  postId: number | string
  body: string
}

export interface Icomment extends InewComment {
  id: number
}
export interface IpostWithComments extends Ipost {
  comments?: Icomment[]
}

export type TsetValue = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
) => string
