import EmailList from './EmailList';
import Interest from './Interest';

const OnBoard = () => {
  return (
    <div className='w-full h-full mt-12'>
      {/* Carousel 들어올 위치 */}
      {/* <Interest userName='채현' /> */}
      <EmailList userName='채현' />
    </div>
  );
};
export default OnBoard;
