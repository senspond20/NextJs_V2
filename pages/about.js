import Router from 'next/router';
export default function About() {
 {/* <Link href="/?history=post" as="/">로 사용하거나 Router.push("/?history=post", '/') */}
  return (
    <div>
        <p>This is the about page</p>
        <div>
                <button onClick={() => Router.push('/?history=about','/')}>Home</button>
            </div>
    </div>
  )
}