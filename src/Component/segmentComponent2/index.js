
import React, { useState } from 'react';
import { View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { styles } from './styles';
import { useEffect } from 'react';
import { withTheme } from '../../Theme';

const SegmentComponent = (props) => {
	const { activePatient, queue, activePatientShow, againActivePa } = props

	const [selectedIndex, setSelectedIndex] = useState(0);


	useEffect(() => {
		const arr = props.activePatient
		if (arr) {
			handleSingleIndexSelect(1);
		}

	}, [])

	const showActivePatient = () => {
		activePatientShow()
	}
	const handleSingleIndexSelect = (index) => {
		if (selectedIndex == 1) {
			queue();
		}
		setSelectedIndex(index)
	}



	return (

		<View style={styles.container}>
			{ againActivePa ? 
				<SegmentedControlTab
				values={[' Queue', ' ActivePa']}
				selectedIndex={selectedIndex}
				tabStyle={styles.tabStyle}
				activeTabStyle={styles.activeTabStyle}
				onTabPress={showActivePatient} />
				: <SegmentedControlTab
					values={[' Queue', ' ActivePa']}
					selectedIndex={selectedIndex}
					tabStyle={styles.tabStyle}
					activeTabStyle={styles.activeTabStyle}
					onTabPress={handleSingleIndexSelect} />
			}

		</View>
	);
};

// export default withTheme(SegmentComponent)
export default SegmentComponent

