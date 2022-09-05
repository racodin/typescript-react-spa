import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/index'

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use(express.static('dist/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
