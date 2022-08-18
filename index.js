export class SIMCheck{
    constructor(number){
        return this.getSIMType(number);
    }

    getSIMType(num) {
        let mNumber = num.trim();
        if (mNumber.length === 10) {
          let _firstNum = mNumber.slice(0, 3);
          switch (_firstNum) {
            case '984' || '985' || '986' || '974' || '975':
              return 'NTC';
              break;
      
            case '980' || '981' || '982':
              return 'NCELL';
              break;
      
            case '961' || '962' || '988':
              return 'SMARTCELL_TOPUP';
              break;
      
            default:
              return 'NTC';
              break;
          }
        }
        throw new Error('Number format Incorrect');
      }
}
