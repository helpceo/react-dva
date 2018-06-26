import dva from 'dva';
import './index.scss';

// 1. 创建应用
const app = dva();

// 2. 使用插件
// app.use({});

// 3. 数据流
app.model(require('./models/overall').default);

// 4. 注册视图
app.router(require('./router').default);

// 5. 启动应用
app.start('#root');
