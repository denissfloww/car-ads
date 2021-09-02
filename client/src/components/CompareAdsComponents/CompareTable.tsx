import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { UserCompareAd } from '../../interfaces/UserCompareAd';
import { useDispatch } from 'react-redux';
import { deleteAdFromCompare, fetchUserCompareAds } from '../../redux/slices/adSlice';
import LocalStorageService from '../../services/LocalStorageService';

interface CompareTableProps {
  userComparedAds: UserCompareAd[];
}

const CompareTable = (props: CompareTableProps) => {
  const { userComparedAds } = props;
  const dispatch = useDispatch();
  const userId = LocalStorageService.getUser().id;
  const handleDeleteFromCompare = (id: string) => {
    dispatch(deleteAdFromCompare(id));
    dispatch(fetchUserCompareAds(userId));
  };
  return (
    <TableContainer style={{ marginTop: '2%' }}>
      <Table aria-label='a dense table'>
        <TableHead>
          <TableRow style={{ backgroundColor: '#f6f5f5' }}>
            <TableCell>
              <b>Автомобиль</b>
            </TableCell>
            <TableCell>
              <b>Привод</b>
            </TableCell>
            <TableCell>
              <b>Год выпуска</b>
            </TableCell>
            <TableCell>
              <b>Количество владельцев</b>
            </TableCell>
            <TableCell>
              <b>Мощность</b>
            </TableCell>
            <TableCell>
              <b>Объем двигателя</b>
            </TableCell>
            <TableCell>
              <b>Двигатель</b>
            </TableCell>
            <TableCell>
              <b>Коробка передач</b>
            </TableCell>
            <TableCell>
              <b>Цена</b>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userComparedAds.map((compareAd, index) => (
            <TableRow>
              <TableCell>
                {compareAd.ad.modification.model.brand.name} {compareAd.ad.modification.model.name}
              </TableCell>
              <TableCell>{compareAd.ad.modification.drive.name}</TableCell>
              <TableCell>{compareAd.ad.modification.yearRelease}</TableCell>
              <TableCell>{compareAd.ad.ownersCount}</TableCell>
              <TableCell>{compareAd.ad.modification.hp}</TableCell>
              <TableCell>{compareAd.ad.modification.engineCapacity}</TableCell>
              <TableCell>{compareAd.ad.modification.engineType.name}</TableCell>
              <TableCell>{compareAd.ad.modification.gearbox.name}</TableCell>
              <TableCell>{compareAd.ad.price}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteFromCompare(compareAd.id)}>
                  <DeleteOutlineIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompareTable;
