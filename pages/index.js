import History from '../components/History';
const styles = {
  from: {
      color: 'red',
  },
};

export default (props) => {
  const { router } = props;
  return (
      <div>
          Home
          {/* {
              router.query.history ? (
                  <div style={styles.from}>
                      From the {router.query.history}
                  </div>
              ) : null
          } */}
          <History/>
      </div>
  );
}