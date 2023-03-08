/**
 * WordPress dependencies
 */
import { PostSavedState, PostPreviewButton } from '@wordpress/editor';
import { useSelect } from '@wordpress/data';
import { PinnedItems } from '@wordpress/interface';
import { useViewportMatch } from '@wordpress/compose';
import {
	VisuallyHidden,
	__unstableMotion as motion,
} from '@wordpress/components';
import {
	store as blockEditorStore,
	BlockToolbar,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import FullscreenModeClose from './fullscreen-mode-close';
import HeaderToolbar from './header-toolbar';
import MoreMenu from './more-menu';
import PostPublishButtonOrToggle from './post-publish-button-or-toggle';
import { default as DevicePreview } from '../device-preview';
import MainDashboardButton from './main-dashboard-button';
import { store as editPostStore } from '../../store';
import TemplateTitle from './template-title';

function MaybeHide( { children, isHidden } ) {
	if ( isHidden ) {
		return <VisuallyHidden>{ children }</VisuallyHidden>;
	}
	return children;
}

function Header( { setEntitiesSavedStatesCallback } ) {
	const isLargeViewport = useViewportMatch( 'large' );
	const {
		hasActiveMetaboxes,
		isPublishSidebarOpened,
		isSaving,
		hasFixedToolbar,
		firstParentClientId,
		hasSelectedBlocks,
		showIconLabels,
		isDistractionFreeMode,
	} = useSelect( ( select ) => {
		const { getSettings, getBlockParents, getSelectedBlockClientIds } =
			select( blockEditorStore );
		const settings = getSettings();
		const _selectedBlockClientIds = getSelectedBlockClientIds();
		const parents =
			_selectedBlockClientIds?.length === 1
				? getBlockParents( _selectedBlockClientIds[ 0 ] )
				: [];
		const hasParent = parents.length > 0;
		return {
			hasSelectedBlocks: !! _selectedBlockClientIds.length,
			hasActiveMetaboxes: select( editPostStore ).hasMetaBoxes(),
			isPublishSidebarOpened:
				select( editPostStore ).isPublishSidebarOpened(),
			isSaving: select( editPostStore ).isSavingMetaBoxes(),
			showIconLabels:
				select( editPostStore ).isFeatureActive( 'showIconLabels' ),
			isDistractionFreeMode:
				select( editPostStore ).isFeatureActive( 'distractionFree' ),
			hasFixedToolbar: settings.hasFixedToolbar,
			firstParentClientId: hasParent,
		};
	} );

	const isDistractionFree = isDistractionFreeMode && isLargeViewport;

	const slideY = {
		hidden: isDistractionFree ? { y: '-50' } : { y: 0 },
		hover: { y: 0, transition: { type: 'tween', delay: 0.2 } },
	};

	const slideX = {
		hidden: isDistractionFree ? { x: '-100%' } : { x: 0 },
		hover: { x: 0, transition: { type: 'tween', delay: 0.2 } },
	};

	return (
		<div className="edit-post-header">
			<MainDashboardButton.Slot>
				<motion.div
					variants={ slideX }
					transition={ { type: 'tween', delay: 0.8 } }
				>
					<FullscreenModeClose showTooltip />
				</motion.div>
			</MainDashboardButton.Slot>
			<motion.div
				variants={ slideY }
				transition={ { type: 'tween', delay: 0.8 } }
				className="edit-post-header__toolbar"
			>
				{ ! hasFixedToolbar && <HeaderToolbar /> }
				{ hasFixedToolbar && (
					<>
						<MaybeHide isHidden={ hasSelectedBlocks }>
							<HeaderToolbar />
						</MaybeHide>
						<MaybeHide isHidden={ ! hasSelectedBlocks }>
							<div
								style={ {
									display: 'flex',
									width: '100%',
									position: 'relative',
									left: firstParentClientId ? '60px' : '0',
								} }
							>
								<BlockToolbar
									hideDragHandle={ hasFixedToolbar }
								/>
							</div>
						</MaybeHide>
					</>
				) }
				<TemplateTitle />
			</motion.div>
			<motion.div
				variants={ slideY }
				transition={ { type: 'tween', delay: 0.8 } }
				className="edit-post-header__settings"
			>
				{ ! isPublishSidebarOpened && (
					// This button isn't completely hidden by the publish sidebar.
					// We can't hide the whole toolbar when the publish sidebar is open because
					// we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.
					// We track that DOM node to return focus to the PostPublishButtonOrToggle
					// when the publish sidebar has been closed.
					<PostSavedState
						forceIsDirty={ hasActiveMetaboxes }
						forceIsSaving={ isSaving }
						showIconLabels={ showIconLabels }
					/>
				) }
				<DevicePreview />
				<PostPreviewButton
					forceIsAutosaveable={ hasActiveMetaboxes }
					forcePreviewLink={ isSaving ? null : undefined }
				/>
				<PostPublishButtonOrToggle
					forceIsDirty={ hasActiveMetaboxes }
					forceIsSaving={ isSaving }
					setEntitiesSavedStatesCallback={
						setEntitiesSavedStatesCallback
					}
				/>
				{ ( isLargeViewport || ! showIconLabels ) && (
					<>
						<PinnedItems.Slot scope="core/edit-post" />
						<MoreMenu showIconLabels={ showIconLabels } />
					</>
				) }
				{ showIconLabels && ! isLargeViewport && (
					<MoreMenu showIconLabels={ showIconLabels } />
				) }
			</motion.div>
		</div>
	);
}

export default Header;
