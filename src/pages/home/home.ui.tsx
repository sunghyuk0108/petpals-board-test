import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>home page</h1>
      <div>
        <Link to={`profile`}>프로필 페이지</Link>
      </div>
      <div>
        <Link to={`login`}>로그인 페이지</Link>
      </div>
      <div>
        <Link to={`register`}>회원가입 페이지</Link>
      </div>
    </main>
  );
}

export default Home;
