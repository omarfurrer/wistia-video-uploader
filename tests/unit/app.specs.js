'use strict';
describe('controllers', function () {

    beforeEach(module('wistia-video-uploader'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('UploadVideoCtrl', function () {

        var $scope, $UploadVideoCtrl;

        beforeEach(function () {
            $scope = $rootScope.$new();
            $UploadVideoCtrl = $controller('UploadVideoCtrl', {$scope: $scope});
        });


        describe('handleFileUploadAdd', function () {
            it('should set attributes to their original state', function () {
                $scope.handleFileUploadAdd();
                expect($scope.isVideoUploaded).toEqual(false);
                expect($scope.embedSrc).toEqual('');
                expect($scope.videoHashedId).toEqual('');
                expect($scope.error).toEqual('');
            });

        });

        describe('handleFileUploadSend', function () {
            it('should set isUploading flag', function () {
                $scope.handleFileUploadSend();
                expect($scope.isUploading).toEqual(true);
            });
        });

        describe('handleFileUploadDone', function () {
            it('should set embedSrc with video hashed id', function () {
                $scope.handleFileUploadDone("45kgawjrx5");
                expect($scope.embedSrc.toString()).toEqual("https://fast.wistia.net/embed/iframe/45kgawjrx5");
            });
            it('should set isVideoUploaded flag', function () {
                $scope.handleFileUploadDone("45kgawjrx5");
                expect($scope.isVideoUploaded).toEqual(true);
            });
        });

        describe('handleFileUploadFail', function () {
            it('set the error property', function () {
                $scope.handleFileUploadFail("error");
                expect($scope.error).toEqual("error");
            });
        });

        describe('handleFileUploadAlways', function () {
            it('should set attributes to their original state', function () {
                $scope.handleFileUploadAlways();
                expect($scope.progress).toEqual(0);
                expect($scope.isUploading).toEqual(false);
            });
        });

        describe('handleFileUploadProgress', function () {
            it('should set progress to a percentage from the done and total', function () {
                $scope.handleFileUploadProgress(512, 1024);
                expect($scope.progress).toEqual(50);
            });
        });

    });
});

describe('services', function () {
    beforeEach(module('wistia-video-uploader'));
    describe('FileUploadService', function () {
        var FileUploadService;
        beforeEach(function () {
            inject(function ($injector) {
                FileUploadService = $injector.get('FileUploadService');
            });
        });
        it('should contain baseEmbedUrl', function () {
            expect(FileUploadService.baseEmbedUrl).toBeDefined();
        });
        it('should contain apiPassword', function () {
            expect(FileUploadService.apiPassword).toBeDefined();
        });
        it('should contain trustUrl function', function () {
            expect(FileUploadService.trustUrl).toBeDefined();
        });
    });
});
