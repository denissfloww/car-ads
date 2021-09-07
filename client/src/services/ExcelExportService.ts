import { UserCompareAd } from '../interfaces/UserCompareAd';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const fileExtension = '.xlsx';
const fileName = 'Compared ads excel';

const exportToExcel = async (userComparedAds: UserCompareAd[]) => {
  const exportArray: any[] = [];

  userComparedAds.map((value, index) => {
    exportArray.push({
      'Код объявления': value.ad.id,
      Марка: value.ad.modification.model.brand.name,
      Модель: value.ad.modification.model.name,
      Привод: value.ad.modification.drive.name,
      'Год выпуска': value.ad.modification.yearRelease,
      'Кол.владельцев': value.ad.ownersCount,
      Мощность: value.ad.modification.hp,
      'Объем двигателя': value.ad.modification.engineCapacity,
      'Тип двигателя': value.ad.modification.engineType.name,
      'Коробка передач': value.ad.modification.gearbox.name,
      Цена: value.ad.price,
    });
  });

  const ws = XLSX.utils.json_to_sheet(exportArray);
  const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

const ExcelExportService = {
  exportToExcel,
};

export default ExcelExportService;
