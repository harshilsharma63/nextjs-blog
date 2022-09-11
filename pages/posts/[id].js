export default function SinglePost({postData}) {
    return <span>{postData}</span>;
}

export async function getStaticPaths() {
    return {
        paths: [
          {
            params: {
              id: 'a'
            }
          },
          {
            params: {
              id: 'b'
            }
          },
            {
                params: {
                    id: 'c'
                }
            }
        ],
        fallback: false,
    }
}

const data = {
    a: 'AAA',
    b: 'BBB',
    c: 'CCC',
}

export async function getStaticProps({params}) {
    console.log(params);
    return {
        props: {
            postData: data[params.id],
        }
    }
}
