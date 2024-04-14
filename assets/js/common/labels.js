
const DEF_STYLE = { font: "65px Arial", color: '#ffffff' };

export const createLabel = (state, msg, style = DEF_STYLE) => {
    const {centerX, centerY} = state.world;
    return state.add.text(centerX, centerY, msg, style);
}