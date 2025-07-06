export default class TrackedAnimate {
    constructor(viewer, cb) {
        this.viewer = viewer;
        this.cb = cb;
    }

    startRoam(positions, speed) {
        let newPositions = positions.map(item => {
            return Cesium.Cartesian3.fromDegrees(item[0], item[1], 0.5);
        });
        this.addRoamLine(newPositions, speed);
    }

    //添加漫游路线
    addRoamLine(positions, speed) {
        this.endRoam();

        let timeObj = this.getSiteTimes(positions, speed);
        let startTime = Cesium.JulianDate.fromDate(new Date()); 
        let stopTime = Cesium.JulianDate.addSeconds(
            startTime,
            timeObj.timeSum,
            new Cesium.JulianDate()
        );

        this.viewer.clock.startTime = startTime.clone();
        this.viewer.clock.stopTime = stopTime.clone();
        this.viewer.clock.currentTime = startTime.clone();

        let property = this.getSampledPositionProperty(
            positions,
            startTime,
            timeObj.siteTimes
        );
        this.addModel(startTime, stopTime, property);

        this.viewer.trackedEntity = this.animateEntity;
        this.timoutId = setTimeout(e => {
            this.endRoam();
        }, timeObj.timeSum * 1000);
    }

    addModel(startTime, stopTime, property) {
        //……
    }

    endRoam() {
        //……
    }

    getSampledPositionProperty(positions, startTime, siteTimes) {
        //……
    }

    //计算每个点位时间与总时间
    getSiteTimes(positions, speed) {
        //……
    }

    //计算距离
    spaceDistance(positions) {
        //……
    }
}