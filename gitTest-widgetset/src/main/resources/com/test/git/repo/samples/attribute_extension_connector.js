window.com_test_git_repo_samples_AttributeExtension = function() {

    this.onStateChange = function() {
        var element = this.getElement(this.getParentId());
        if (element) {
            var attributes = this.getState().attributes;
            for (var attr in attributes) {
                if (attributes.hasOwnProperty(attr)) {
                    element.setAttribute(attr, attributes[attr]);
                }
            }
        }
    }
}
