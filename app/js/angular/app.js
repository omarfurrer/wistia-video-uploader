(function () {

    'use strict';
    angular.module('wistia-video-uploader', ['blueimp.fileupload'])
            .factory('FileUploadService', ['$sce', FileUploadService])
            .controller('UploadVideoCtrl', ['$scope', 'FileUploadService', UploadVideoCtrl]);

    // TODO : ideally put each controller and service in seperate files.

    /*
     * Controllers
     */
    function UploadVideoCtrl($scope, FileUploadService) {

        $scope.isUploading = false;
        $scope.isVideoUploaded = false;

        $scope.progress = 0;
        $scope.error = '';

        $scope.embedSrc = '';
        $scope.videoHashedId = '';

        $scope.apiPassword = FileUploadService.apiPassword;

        $scope.fileUploadoptions = {
            autoUpload: true
        };

        // handling upload events

        // add file for upload
        $scope.handleFileUploadAdd = function () {
            $scope.isVideoUploaded = false;
            $scope.embedSrc = '';
            $scope.videoHashedId = '';
            $scope.error = '';
        };
        $scope.$on('fileuploadadd', $scope.handleFileUploadAdd);

        // send request to server for file upload
        $scope.handleFileUploadSend = function () {
            $scope.isUploading = true;
        };
        $scope.$on('fileuploadsend', $scope.handleFileUploadSend);

        // file upload success
        $scope.handleFileUploadDone = function (videoHashedId) {
            $scope.videoHashedId = videoHashedId;
            // TODO : Make sure video processing is done
            $scope.embedSrc = FileUploadService.trustUrl(FileUploadService.baseEmbedUrl + videoHashedId);
            $scope.isVideoUploaded = true;
        };
        $scope.$on('fileuploaddone', function (event, data) {
            $scope.handleFileUploadDone(data.result.hashed_id);
        });

        // file upload failed
        $scope.handleFileUploadFail = function (error) {
            $scope.error = error;
        };
        $scope.$on('fileuploadfail', function (event, data) {
            $scope.handleFileUploadFail(data.result.error);
        });

        // file upload completed
        $scope.handleFileUploadAlways = function () {
            $scope.progress = 0;
            $scope.isUploading = false;
        };
        $scope.$on('fileuploadalways', $scope.handleFileUploadAlways);

        // loading bar progress handling
        $scope.handleFileUploadProgress = function (loaded, total) {
            $scope.progress = parseInt(loaded / total * 100, 10);
        };
        $scope.$on('fileuploadprogress', function (event, data) {
            $scope.handleFileUploadProgress(data.loaded, data.total);
        });

    }

    /*
     * Services
     */

    function FileUploadService($sce) {
        var service = {};

        service.baseEmbedUrl = "https://fast.wistia.net/embed/iframe/";

        // TODO : ideally to be put in a config file
        service.apiPassword = "86560e9d29dcd4518f9579a33892008068704d23147d871733309359faba4ea5"; // demo account

        service.trustUrl = function (url) {
            return $sce.trustAsResourceUrl(url);
        };

        return service;
    }
    ;

})();