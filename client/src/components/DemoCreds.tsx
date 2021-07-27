import { Alert, AlertTitle } from '@material-ui/lab';

const DemoCreds = () => {
  return (
    <div style={{ width: '100%', marginTop: '0.8em', marginBottom: '0.8em' }}>
      <Alert severity="info">
        <AlertTitle>Тестовый пароль и логин</AlertTitle>
        Логин: 'test' & Пароль: 'password'
      </Alert>
    </div>
  );
};

export default DemoCreds;
