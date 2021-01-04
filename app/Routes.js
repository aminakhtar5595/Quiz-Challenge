import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './Containers/Home';
import Questions from './Containers/Questions';
import QuestionTwo from './Containers/Questions/QuestionTwo';
import QuestionThree from './Containers/Questions/QuestionThree';
import QuestionFour from './Containers/Questions/QuestionFour';
import QuestionFive from './Containers/Questions/QuestionFive';
import QuestionSix from './Containers/Questions/QuestionSix';
import QuestionSeven from './Containers/Questions/QuestionSeven';
import styles from './routeStyle'
import QuestionEight from './Containers/Questions/QuestionEight';
import QuestionNine from './Containers/Questions/QuestionNine';
import QuestionTen from './Containers/Questions/QuestionTen';
import QuestionEleven from './Containers/Questions/QuestionEleven';
import QuestionTwelve from './Containers/Questions/QuestionTwelve';
import QuestionThirteen from './Containers/Questions/QuestionThirteen';
import QuestionFourteen from './Containers/Questions/QuestionFourteen';
import QuestionFifteen from './Containers/Questions/QuestionFifteen';
import QuestionSixteen from './Containers/Questions/QuestionSixteen';
import QuestionSeventeen from './Containers/Questions/QuestionSeventeen';
import QuestionEighteen from './Containers/Questions/QuestionEighteen';
import QuestionNineteen from './Containers/Questions/QuestionNineteen';
import QuestionTwenty from './Containers/Questions/QuestionTwenty';

export default class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Stack key="root" navigationBarStyle={styles.navigation_Bar_Style}>
                    <Scene
                        key="home"
                        initial
                        component={Home}
                        title="Home"
                        tabBarLabel="Home"
                        hideNavBar
                    />

                    <Scene
                        key="questions"
                        // initial
                        component={Questions}
                        title="Questions"
                        tabBarLabel="Questions"
                        hideNavBar
                    />

                    <Scene
                        key="question_two"
                        // initial
                        component={QuestionTwo}
                        title="Question Two"
                        tabBarLabel="Question Two"
                        hideNavBar
                    />

                    <Scene
                        key="question_three"
                        // initial
                        component={QuestionThree}
                        title="Question Three"
                        tabBarLabel="Question Three"
                        hideNavBar
                    />

                    <Scene
                        key="question_four"
                        // initial
                        component={QuestionFour}
                        title="Question Four"
                        tabBarLabel="Question Four"
                        hideNavBar
                    />

                    <Scene
                        key="question_five"
                        // initial
                        component={QuestionFive}
                        title="Question Five"
                        tabBarLabel="Question Five"
                        hideNavBar
                    />

                    <Scene
                        key="question_six"
                        // initial
                        component={QuestionSix}
                        title="Question Six"
                        tabBarLabel="Question Six"
                        hideNavBar
                    />

                    <Scene
                        key="question_seven"
                        // initial
                        component={QuestionSeven}
                        title="Question Seven"
                        tabBarLabel="Question Seven"
                        hideNavBar
                    />

                    <Scene
                        key="question_eight"
                        // initial
                        component={QuestionEight}
                        title="Question Eight"
                        tabBarLabel="Question Eight"
                        hideNavBar
                    />

                    <Scene
                        key="question_nine"
                        // initial
                        component={QuestionNine}
                        title="Question Nine"
                        tabBarLabel="Question Nine"
                        hideNavBar
                    />

                    <Scene
                        key="question_ten"
                        // initial
                        component={QuestionTen}
                        title="Question Ten"
                        tabBarLabel="Question Ten"
                        hideNavBar
                    />

                    <Scene
                        key="question_eleven"
                        // initial
                        component={QuestionEleven}
                        title="Question Eleven"
                        tabBarLabel="Question Eleven"
                        hideNavBar
                    />

                    <Scene
                        key="question_twelve"
                        // initial
                        component={QuestionTwelve}
                        title="Question Twelve"
                        tabBarLabel="Question Twelve"
                        hideNavBar
                    />

                    <Scene
                        key="question_thirteen"
                        // initial
                        component={QuestionThirteen}
                        title="Question Thirteen"
                        tabBarLabel="Question Thirteen"
                        hideNavBar
                    />

                    <Scene
                        key="question_fourteen"
                        // initial
                        component={QuestionFourteen}
                        title="Question Fourteen"
                        tabBarLabel="Question Fourteen"
                        hideNavBar
                    />

                    <Scene
                        key="question_fifteen"
                        // initial
                        component={QuestionFifteen}
                        title="Question Fifteen"
                        tabBarLabel="Question Fifteen"
                        hideNavBar
                    />

                    <Scene
                        key="question_sixteen"
                        // initial
                        component={QuestionSixteen}
                        title="Question Sixteen"
                        tabBarLabel="Question Sixteen"
                        hideNavBar
                    />

                    <Scene
                        key="question_seventeen"
                        // initial
                        component={QuestionSeventeen}
                        title="Question Seventeen"
                        tabBarLabel="Question Seventeen"
                        hideNavBar
                    />

                    <Scene
                        key="question_eighteen"
                        // initial
                        component={QuestionEighteen}
                        title="Question Eighteen"
                        tabBarLabel="Question Eighteen"
                        hideNavBar
                    />

                    <Scene
                        key="question_nineteen"
                        // initial
                        component={QuestionNineteen}
                        title="Question Nineteen"
                        tabBarLabel="Question Nineteen"
                        hideNavBar
                    />

                    <Scene
                        key="question_twenty"
                        // initial
                        component={QuestionTwenty}
                        title="Question Twenty"
                        tabBarLabel="Question Twenty"
                        hideNavBar
                    />
                </Stack>
            </Router>
        )
    }
}