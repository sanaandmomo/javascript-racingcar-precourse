import { CHARACTER } from '../asset/constant.js';

export default class RacingResult {
    constructor($racingCntForm) {
        this.$resultContainer = document.createElement('div');
        document.getElementById('app').append(this.$resultContainer);

        this.$racingCntTitle = document.getElementById('racing-count-title');
        this.$racingCntForm = $racingCntForm;

        this.$racingResultTitle = document.getElementById('racing-result-title');

        this.hideRacingCntForm();
        this.hideRacingResultTitle();
    }

    render(gameResult, winners) {
        this.setResultContainerHTML('');
        this.showRacingResultTitle();
        this.renderGameResult(gameResult);
        this.renderWinners(winners);
    }

    renderGameResult(gameResult) {
        this.setResultContainerHTML(
            gameResult.reduce(
                (outer, carInfo) =>
                    `${outer}${carInfo.reduce(
                        (inner, { carName, trackLog }) =>
                            `${inner}<span>${carName}${CHARACTER.intro} ${trackLog}</span><br/>`,
                        '',
                    )}<br/><br/>`,
                '',
            ),
        );
    }

    renderWinners(winners) {
        this.setResultContainerHTML(
            `${this.getResultContainerHTML()}
            최종 우승자${CHARACTER.intro} 
            <span id='racing-winners'>${winners.join(CHARACTER.carNameSplit)}</span>`,
        );
    }

    setResultContainerHTML(html) {
        this.$resultContainer.innerHTML = html;
    }

    getResultContainerHTML() {
        return this.$resultContainer.innerHTML;
    }

    setDisplayRacingCntForm(display) {
        this.$racingCntTitle.style.display = display;
        this.$racingCntForm.style.display = display;
    }

    hideRacingCntForm() {
        this.setDisplayRacingCntForm('none');
    }

    showRacingCntForm() {
        this.setDisplayRacingCntForm('block');
    }

    setDisplayRacingResultTitle(display) {
        this.$racingResultTitle.style.display = display;
    }

    hideRacingResultTitle() {
        this.setDisplayRacingResultTitle('none');
    }

    showRacingResultTitle() {
        this.setDisplayRacingResultTitle('block');
    }
}
