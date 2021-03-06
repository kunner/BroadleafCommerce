/*
 * #%L
 * BroadleafCommerce Open Admin Platform
 * %%
 * Copyright (C) 2009 - 2013 Broadleaf Commerce
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *       http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
(function($, BLCAdmin) {
    
    BLCAdmin.messages = {
        // List grid messages
        saved : 'Saved',
        reorder : 'Reorder',
        done : 'Done',
        updated : 'Updated',
        
        // Rule builder messages
        rule : 'Rule',
        subCondition : 'Sub-Condition',
        entireCondition : 'Entire Condition',
        booleanTrue : 'True',
        booleanFalse : 'False',
        
        // Asset messages
        selectUploadAsset : 'Select / Upload Asset',
        
        // Modal messages
        error : 'Error',
        forbidden403 : '403 Forbidden',
        staleContent : '409 The request could not be completed due to a conflict with the current state of the target resource, likely due to stale state. Please Refresh.',
        errorOccurred : 'An error occurred',
        loading : 'Loading',
        
        // Session timer messages
        sessionCountdown: 'Your session expires in <span>',
        sessionCountdownEnd: '</span> seconds',

        problemSaving : 'There was a problem saving. See errors below',
        problemDeleting : 'There was a problem deleting this record. See errors below',
        problemReverting : 'There was a problem reverting this record.',
        globalErrors : 'Global Errors'

    };
            
})(jQuery, BLCAdmin);
