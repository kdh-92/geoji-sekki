import { Rate } from 'antd';

const App = () => {

    return (
        <div>
            <h1>{process.env.NODE_ENV}</h1>
            <h1>{process.env.REACT_APP_API_URL}</h1>
            {/* antd 적용되었는지 확인하기 위한 테스트용 */}
            <Rate allowHalf defaultValue={2.5} />
        </div>
    )
}

export default App;
