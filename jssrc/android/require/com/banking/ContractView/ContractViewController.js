define("com/banking/ContractView/userContractViewController", function() {
    /**
     * data should be of the form
     * [
     * {"title": "Temenos Corp", "caption": "1 of 4 selected"}, // defines the data for the parent
     * [
     * 	{"title": "Temenos India", "caption": "CustomerId: 123232", "selected": true}, // defines the data for the children
     * {"title": "Temenos India", "caption": "CustomerId: 123232", "selected": true}
     * ]
     * ]
     */
    return {
        data: [],
        selectedCheckboxImage: 'checkbox.png',
        notselectedCheckboxImage: 'tickmarkbox.png',
        chevronDownImage: 'chevron.png',
        chevronUpImage: 'chevronright.png',
        preshow: function() {
            this.view.flxSampleContainer.setVisibility(false);
        },
        initialize: function(data) {
            // set the data
            this.data = data;
            // remove previously added flexes
            this.removePreviousFlexes();
            // create new flexes
            this.createNewFlexes(data);
            // attach events to the flexes
            this.attachEvents(data);
        },
        removePreviousFlexes: function() {
            var len = this.view.flxContentContainer.widgets().length;
            while (len-- > 0) {
                var widget = this.view.flxContentContainer.widgets()[0];
                this.view.flxContentContainer.remove(widget);
            }
        },
        updateTheParentCaption: function(i) {
            let parent_prefix = `clone${i}`;
            let children = this.data[i][1];
            let selected_children_count = 0;
            for (let j = 0; j < children.length; j++) {
                if (children[j]['selected']) selected_children_count++;
            }
            this.setDataToParent(parent_prefix, this.data[i][0]['title'], `${selected_children_count} of ${children.length} Selected`);
        },
        attachEvents: function(array) {
            for (let i = 0; i < array.length; i++) {
                let parent_prefix = `clone${i}`;
                let checkbox_image_flex = `${parent_prefix}flxParentImageContainer`;
                let chevron_flex = `${parent_prefix}flxParentChevronContainer`;
                // attach parent tick event
                this.view[checkbox_image_flex].onClick = function() {
                    let image_id = `${parent_prefix}imgTickParent`;
                    this.toggleParentTickFlex(i, image_id);
                }.bind(this);
                // attach the chevron event
                this.view[chevron_flex].onClick = function() {
                    let child_container_id = `${parent_prefix}flxChildContainer`;
                    this.toggleChildren(i, child_container_id);
                }.bind(this);
                for (let j = 0; j < array[i][1].length; j++) {
                    let child_prefix = `clone${i}child${j}`;
                    let child_image_flex = `${child_prefix}flxChildImageContainer`;
                    this.view[child_image_flex].onClick = function() {
                        let image_id = `${child_prefix}imgTickChild`;
                        this.toggleChildTickFlex(i, j, image_id);
                    }.bind(this);
                }
            }
        },
        toggleParentTickFlex: function(i, parent_image) {
            var src = this.view[parent_image].src;
            var children_status;
            if (src === this.selectedCheckboxImage) {
                // the box is already selected
                this.view[parent_image].src = this.notselectedCheckboxImage;
                // set the status of all it's child to false
                children_status = false;
            } else {
                // the box is not selected
                this.view[parent_image].src = this.selectedCheckboxImage;
                // set the status of all it's child to true
                children_status = true;
            }
            var children = this.data[i][1];
            for (var j = 0; j < children.length; j++) {
                this.setStatusToChild(`clone${i}child${j}`, children_status);
                children[j]['selected'] = children_status;
            }
            // update the count of selected
            this.updateTheParentCaption(i);
        },
        toggleChildren: function(i, child_container_id) {
            var visible = this.view[child_container_id].isVisible;
            var chevron_image = `clone${i}imgChevronParent`;
            var src = visible ? this.chevronUpImage : this.chevronDownImage;
            this.view[chevron_image].src = src;
            this.view[child_container_id].setVisibility(!visible);
        },
        toggleChildTickFlex: function(i, j, child_image) {
            var src = this.view[child_image].src;
            var status;
            if (src === this.selectedCheckboxImage) {
                // the box is already selected now unselect the box
                this.view[child_image].src = this.notselectedCheckboxImage;
                status = false;
            } else {
                this.view[child_image].src = this.selectedCheckboxImage;
                status = true;
            }
            // update the status in the data
            this.data[i][1][j]['selected'] = status;
            var parent_status = false;
            var current_children = this.data[i][1];
            for (var k = 0; k < current_children.length; k++) {
                if (current_children[k]['selected']) {
                    parent_status = true;
                    break;
                }
            }
            // set the status of the parent
            this.setStatusToParent(`clone${i}`, parent_status);
            // update the count of selected
            this.updateTheParentCaption(i);
        },
        createNewFlexes: function(array) {
            var contentContainer = this.view.flxContentContainer;
            for (var i = 0; i < array.length; i++) {
                var data = array[i];
                // get parent and child data
                var parent = data[0],
                    children = data[1];
                // get the parent title and caption
                var title = parent['title'],
                    caption = parent['caption'];
                var parent_prefix = `clone${i}`;
                // create the parent flex
                var parent_clone = this.view.flxParentWrapper.clone(parent_prefix);
                // add the parent flex contentFlex              	
                contentContainer.add(parent_clone);
                // set the title and caption to the parent container              	
                this.setDataToParent(parent_prefix, title, caption);
                if (children.length === 0) {
                    // if no children
                    this.setStatusToParent(parent_prefix, false);
                    continue;
                }
                var child_selected_count = 0;
                // create the container that holds all the child flexes
                var child_container_clone = this.view.flxChildContainer.clone(parent_prefix);
                // add the container that holds all the child flexes into the content container
                contentContainer.add(child_container_clone);
                // hide this child_container 
                child_container_clone.setVisibility(false);
                // handle all the children data
                for (var j = 0; j < children.length; j++) {
                    // create the prefix
                    var child_prefix = `clone${i}child${j}`;
                    var child = children[j];
                    // get the title and caption
                    var child_title = child['title'],
                        child_caption = child['caption'];
                    // create the child flex
                    var child_clone = this.view.flxChildWrapper.clone(child_prefix);
                    // add the child clone to the child container
                    child_container_clone.add(child_clone);
                    // set the data to the child
                    this.setDataToChild(child_prefix, child_title, child_caption);
                    // get the status
                    var child_selected = child['selected'];
                    // set the status of the child
                    this.setStatusToChild(child_prefix, child_selected);
                    if (child_selected) child_selected_count++;
                }
                // create the seperator for the child container
                var child_separator_clone = this.view.flxChildContainerSeparator.clone(parent_prefix);
                // add the separator to the child container
                child_container_clone.add(child_separator_clone);
                // hide the separator for the last child
                this.view[`clone${i}child${children.length - 1}flxChildSeperator`].setVisibility(false);
                // update the caption (specific to contract SME requirement only)
                this.setDataToParent(parent_prefix, title, `${child_selected_count} of ${children.length} Selected`);
                // set the status of the parent
                this.setStatusToParent(parent_prefix, child_selected_count !== 0);
            }
        },
        setDataToParent: function(parent_prefix, title, caption) {
            var full_title_id = parent_prefix + "lblParentTitle";
            var full_caption_id = parent_prefix + "lblParentCaption";
            this.view[full_title_id].text = title;
            this.view[full_caption_id].text = caption;
        },
        setDataToChild: function(child_prefix, title, caption) {
            var full_title_id = child_prefix + "lblChildTitle";
            var full_caption_id = child_prefix + "lblChildCaption";
            this.view[full_title_id].text = title;
            this.view[full_caption_id].text = caption;
        },
        setStatusToChild: function(child_prefix, child_selected) {
            var full_image_id = child_prefix + "imgTickChild";
            var src = child_selected ? this.selectedCheckboxImage : this.notselectedCheckboxImage;
            this.view[full_image_id].src = src;
        },
        setStatusToParent: function(parent_prefix, parent_selected) {
            var full_image_id = parent_prefix + "imgTickParent";
            var src = parent_selected ? this.selectedCheckboxImage : this.notselectedCheckboxImage;
            this.view[full_image_id].src = src;
        },
        getAllSelected: function() {
            let array = this.data;
            let result = [];
            for (let i = 0; i < array.length; i++) {
                let children = array[i][1];
                let selected_children = [];
                for (let j = 0; j < children.length; j++) {
                    if (children[j]['selected']) {
                        selected_children.push(j);
                    }
                }
                result.push(selected_children);
            }
            return result;
        },
    };
});
define("com/banking/ContractView/ContractViewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_a125487d0cbc441f8982d6a52f429585: function AS_FlexContainer_a125487d0cbc441f8982d6a52f429585(eventobject) {
        var self = this;
        this.preshow();
    }
});
define("com/banking/ContractView/ContractViewController", ["com/banking/ContractView/userContractViewController", "com/banking/ContractView/ContractViewControllerActions"], function() {
    var controller = require("com/banking/ContractView/userContractViewController");
    var actions = require("com/banking/ContractView/ContractViewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
