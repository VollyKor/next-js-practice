export interface State {
  posts: {
    entities: Ipost[]
    loading: boolean
    error: any
  }
}

export interface InewPost {
  title: string
  body: string
}

export interface Ipost extends InewPost {
  id: number | string
}

export type TsetValue = (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
) => string
