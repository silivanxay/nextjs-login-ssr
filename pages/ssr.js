import React from 'react'

export default function ssr(props) {
  const {data} = props;
  return (
    <div>{data}</div>
  )
}
export async function getServerSideProps(context) {
    const {  req } = context;
    const { cookies } = req;
     const jwt = cookies.OursiteJWT;
     if (jwt) {
        return {
            props:{
                data: "only authenticated user can read this"
            }
        }
      }
    return {
      props: {
        data: "please login"
      }, // will be passed to the page component as props
    }
  }
