import {
  BACKGROUND_COLOR,
  DARK,
  SECONDARY,
  SUBTITLE_TEXT,
  WHITE,
} from '@utils/colors';
import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
    // position: 'relative',
    // position: 'absolute'
    // justifyContent: 'flex-end',
  },
  information: {
    position: 'absolute',
    height: '60%',
    backgroundColor: BACKGROUND_COLOR,
    borderTopRightRadius: 85,
    paddingHorizontal: '10.1%',
    paddingTop: '9.35%',
    marginTop: '100%'
  },
  bgImage: {
    position: 'absolute',
    marginLeft: 158,
    marginTop: 50
  },
  meta: {
    position: 'absolute',
    // backgroundColor: 'BACKGROUND_COLOR',
    width: 200,
    height: 200,
    marginTop: 245,
    marginLeft: 35

  },
  metaData: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
    // justifyContent: 'space-evenly'
  },
  plantLabel: {
    position: 'absolute',
    marginLeft: 35,
    marginTop: 120,
  },
  backButton: {
    position: 'absolute',
    marginTop: 73,
    marginLeft: 35,
  },
  infoButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(90, 90, 117, 0.2)',
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 999,
    elevation: 10,
    overflow: 'hidden',
    marginTop: 15
  }
});

export default styles;
